/**
 * IP Detection Utility
 * Automatically detects the computer's IP address for backend connection
 */

/**
 * Extract IP address from Expo dev server connection
 * When running in Expo, we can get the dev server IP from the connection
 */
const getIPFromExpoConnection = () => {
  try {
    // Try to get from Expo's dev server info
    // In Expo Go, the connection URL contains the IP
    if (typeof global !== 'undefined' && global.__expo) {
      const manifestUrl = global.__expo.manifestUrl;
      if (manifestUrl) {
        // Extract IP from URLs like: exp://192.168.1.100:8081 or http://192.168.1.100:8081
        const ipMatch = manifestUrl.match(/(?:exp|http):\/\/([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})/);
        if (ipMatch && ipMatch[1]) {
          return ipMatch[1];
        }
      }
    }
    return null;
  } catch (error) {
    console.warn('Error getting IP from Expo connection:', error);
    return null;
  }
};

/**
 * Test if backend is accessible at a given IP
 */
const testBackendConnection = async (ip) => {
  return new Promise((resolve) => {
    const timeout = setTimeout(() => resolve(false), 2000); // 2 second timeout
    
    fetch(`http://${ip}:8000/health`, {
      method: 'GET',
    })
      .then(response => {
        clearTimeout(timeout);
        resolve(response.ok);
      })
      .catch(() => {
        clearTimeout(timeout);
        resolve(false);
      });
  });
};

/**
 * Try to detect IP by testing common local network IPs
 * This scans common IP ranges to find the backend
 */
const detectIPByScanning = async () => {
  console.log('🔍 Scanning for backend...');
  
  // Common IP ranges to test
  const testIPs = [];
  
  // Test 192.168.1.x (most common)
  for (let i = 1; i <= 100; i++) {
    testIPs.push(`192.168.1.${i}`);
  }
  
  // Test 192.168.0.x
  for (let i = 1; i <= 50; i++) {
    testIPs.push(`192.168.0.${i}`);
  }

  // Test in batches to avoid overwhelming
  const batchSize = 20;
  for (let i = 0; i < testIPs.length; i += batchSize) {
    const batch = testIPs.slice(i, i + batchSize);
    const promises = batch.map(ip => 
      testBackendConnection(ip).then(isValid => isValid ? ip : null)
    );
    
    const results = await Promise.all(promises);
    const foundIP = results.find(ip => ip !== null);
    
    if (foundIP) {
      return foundIP;
    }
  }

  return null;
};

/**
 * Main function to detect the backend IP address
 * Returns the IP address or null if not found
 */
export const detectBackendIP = async () => {
  console.log('🔍 Auto-detecting backend IP address...');

  // Method 1: Try to get from Expo connection (fastest)
  const expoIP = getIPFromExpoConnection();
  if (expoIP) {
    console.log('📍 Found IP from Expo connection:', expoIP);
    const isValid = await testBackendConnection(expoIP);
    if (isValid) {
      console.log('✅ Verified backend at:', expoIP);
      return expoIP;
    }
  }

  // Method 2: Scan common IP ranges (slower but more reliable)
  console.log('🔍 Scanning network for backend...');
  const scannedIP = await detectIPByScanning();
  if (scannedIP) {
    console.log('✅ Found backend at:', scannedIP);
    return scannedIP;
  }

  console.warn('⚠️ Could not automatically detect backend IP');
  return null;
};

/**
 * Get the backend URL with detected or fallback IP
 * @param {string} fallbackIP - IP to use if detection fails (default: 192.168.1.128)
 * @returns {Promise<string>} Backend URL
 */
export const getBackendURL = async (fallbackIP = '192.168.1.128') => {
  const detectedIP = await detectBackendIP();
  const ipToUse = detectedIP || fallbackIP;
  const url = `http://${ipToUse}:8000`;
  console.log('🌐 Using backend URL:', url);
  return url;
};
