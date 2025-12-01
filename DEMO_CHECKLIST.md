# Quick Demo Checklist - For Presentation Day

## Pre-Presentation Setup (Do This 10-15 Minutes Before)

### 1. Start Docker Services
```powershell
cd C:\Users\eliza\Downloads\CS468_Project2
docker-compose up -d
docker ps  # Verify 3 containers running
```

### 2. Verify Backend
```powershell
Invoke-WebRequest http://localhost:8000/
# Should see: {"message":"Study Coach API Gateway is running"...}
```

### 3. Start Mobile App
```powershell
cd mobile-app
npm start
# Wait for QR code to appear
```

### 4. Connect Phone
- [ ] Phone and computer on same WiFi
- [ ] Expo Go app installed on phone
- [ ] Scan QR code
- [ ] App loads on phone
- [ ] Test: Tap "📷 Scan Notes" - camera should open

### 5. Prepare Test Note
- [ ] Have a clear, readable note ready (printed or handwritten)
- [ ] Note should have enough content (3-4 paragraphs)
- [ ] Good lighting for photo

---

## During Presentation - Quick Reference

### Opening (30 seconds)
- "Today we'll demonstrate an AI-powered study coach app"
- "It scans notes and generates quizzes, summaries, and flashcards"

### Demo Steps (Follow in Order):

1. **Show Home Screen** → "Main interface with scan button"

2. **Scan Note** → 
   - Tap "📷 Scan Notes"
   - Take photo of prepared note
   - Wait for "Scanning..." to complete

3. **Show Scanning Mode** → 
   - "You can scan multiple documents"
   - Tap "Done Scanning - Generate Content"

4. **Wait for Generation** → 
   - "AI is processing... this takes 1-3 minutes"
   - Show alert: "Generating Content"

5. **Show Summary Tab** → 
   - Read summary
   - Tap "🔊 Read Summary" (TTS demo)

6. **Show Flashcards Tab** → 
   - Show cards
   - Tap "🔊 Read Card" (TTS demo)

7. **Show Quiz Tab** → 
   - **Answer correctly** → Show green, vibration
   - **Answer incorrectly** → Show red, vibration
   - **Reveal answer** → Show explanation
   - **TTS** → Tap "🔊 Read Question"

8. **Show Settings** → 
   - "Users can configure backend IP"

---

## If Something Breaks

### Backend Not Working:
```powershell
docker-compose restart
docker-compose logs api-gateway
```

### App Won't Connect:
- Check IP in `mobile-app/services/api.js` and `mobile-app/App.js`
- Try: `npx expo start --tunnel`

### Content Generation Too Slow:
- Say: "This is normal - LLM processing takes time"
- Show: "The AI is analyzing your notes and generating content"

### Camera Not Working:
- Check phone permissions
- Restart Expo app

---

## Key Points to Emphasize

✅ **Hardware Input:** Camera scanning
✅ **Hardware Output:** Display, TTS, Vibration
✅ **AI Integration:** Ollama LLM generates all content
✅ **50%+ AI Code:** Integration code, API structures, components
✅ **Microservices:** Docker-based architecture
✅ **Privacy:** Local LLM, no external API calls

---

## Backup Plan

If demo completely fails:
1. Show screenshots of working app
2. Show backend logs to demonstrate services
3. Explain what would happen in working demo
4. Show code to demonstrate architecture

---

**Keep this checklist handy during your presentation!**

