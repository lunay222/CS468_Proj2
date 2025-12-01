# Presentation Guide - AI Context-Aware Study Coach

## Presentation Structure

### 1. Introduction & Project Purpose (2-3 minutes)
### 2. Development Process & Tools (3-4 minutes)
### 3. Live Demonstration (5-7 minutes)
### 4. Q&A (2-3 minutes)

---

## Slide 1: Title Slide

**Title:** AI Context-Aware Study Coach

**Subtitle:** A Mobile Application for Generating Study Materials from Scanned Notes

**Presenters:** [Your Names]
**Course:** CS468
**Date:** [Date]

---

## Slide 2: Project Purpose - What We Created

### What:
- **Mobile app** that uses phone camera to scan handwritten/printed notes
- **AI-powered system** that generates:
  - Multiple choice quizzes
  - Summaries
  - Flashcards
- **Microservice architecture** with Docker containerization

### Why:
- **Problem:** Students spend too much time creating study materials manually
- **Solution:** Automate study material generation using AI
- **Benefit:** Save time, improve learning efficiency, study anywhere

### Key Features:
- 📷 Camera input (hardware input requirement)
- 🤖 AI-generated content (Ollama LLM)
- 📱 Interactive quiz display with immediate feedback
- 🔊 Text-to-speech for audio output
- 📳 Vibration feedback for interactions

---

## Slide 3: Project Purpose - Technical Requirements Met

### Assignment Requirements:
✅ **Hardware Input:** Phone camera for scanning notes
✅ **Hardware Output:** 
   - Display (quiz questions)
   - Audio (TTS reading)
   - Haptic (vibration feedback)
✅ **AI Integration:** Ollama LLM for content generation
✅ **50%+ AI-Generated Code:** Integration code, API interfaces, prompts

### Architecture:
- **OCR Service:** Extracts text from images (Tesseract)
- **API Gateway:** Orchestrates all services
- **Ollama LLM Service:** Generates quizzes, summaries, flashcards
- **Mobile App:** React Native with Expo

---

## Slide 4: Development Process - How We Built It

### Phase 1: Planning & Design
- Defined microservice architecture
- Designed API endpoints
- Planned data flow: Image → OCR → Text → LLM → Content → Display

### Phase 2: Backend Development
- Set up Docker containers for services
- Implemented OCR service (FastAPI + Tesseract)
- Created API Gateway to coordinate services
- Integrated Ollama LLM for AI content generation

### Phase 3: Mobile App Development
- Built React Native app with Expo
- Implemented camera integration
- Created interactive quiz UI
- Added TTS and vibration features

### Phase 4: Testing & Integration
- Unit tests for each service
- Integration tests for complete workflows
- End-to-end testing with real images

---

## Slide 5: Development Process - Tools Used

### AI Tools (50%+ Code Generation):
- **ChatGPT / Cursor:** 
  - API structure and endpoints
  - Service classes and integration code
  - Docker configuration
  - React Native components
  - ~60% of core integration code

### Development Tools:
- **Ollama:** Local LLM for privacy (llama3.2:1b model)
- **Tesseract OCR:** Text extraction from images
- **FastAPI:** Backend framework
- **React Native + Expo:** Mobile app framework
- **Docker:** Containerization

### Testing Tools:
- **pytest:** Python testing framework
- **Manual testing:** Real device testing

---

## Slide 6: Development Process - Challenges & Solutions

### Challenge 1: LLM Response Format
- **Problem:** Ollama responses needed consistent JSON structure
- **Solution:** Created prompt templates with explicit JSON format requirements

### Challenge 2: Mobile-Backend Communication
- **Problem:** Phone needs to connect to computer's backend
- **Solution:** IP address configuration, same WiFi network requirement

### Challenge 3: OCR Accuracy
- **Problem:** Handwritten text extraction can be inaccurate
- **Solution:** Image quality recommendations, error handling

### Challenge 4: Real-time Feedback
- **Problem:** Users need immediate feedback on quiz answers
- **Solution:** Implemented instant correct/incorrect indicators with vibration

---

## Slide 7: Live Demonstration - Overview

### What We'll Show:
1. **Start the system** (Docker services + mobile app)
2. **Scan a note** using phone camera
3. **View generated content:**
   - Summary
   - Flashcards
   - Multiple choice quiz
4. **Interact with quiz:**
   - Answer questions
   - See immediate feedback
   - Use TTS to hear questions

---

## Slide 8: Live Demonstration - Setup Steps

### Before Starting Demo:

**Step 1: Start Docker Services**
```powershell
# Open PowerShell in project directory
docker-compose up -d

# Verify services are running
docker ps
```

**Step 2: Verify Backend**
```powershell
# Test API Gateway
Invoke-WebRequest http://localhost:8000/

# Should return: {"message":"Study Coach API Gateway is running","status":"healthy"}
```

**Step 3: Start Mobile App**
```powershell
# Navigate to mobile app
cd mobile-app

# Start Expo
npm start
```

**Step 4: Connect Phone**
- Ensure phone and computer are on same WiFi
- Scan QR code with Expo Go app
- App should load on phone

---

## Slide 9: Live Demonstration - Demo Script

### Demo Flow:

**1. Show Home Screen (10 seconds)**
- Point to "📷 Scan Notes" button
- Explain: "This is the main interface"

**2. Scan a Note (30 seconds)**
- Tap "Scan Notes"
- Allow camera permission if prompted
- Take photo of a note (have a prepared note ready)
- Show: "Scanning..." indicator

**3. Show Scanning Mode (20 seconds)**
- Explain: "You can scan multiple documents"
- Show: "X documents scanned" counter
- Tap "Done Scanning - Generate Content"

**4. Show Content Generation (30 seconds)**
- Show: "Generating Content" alert
- Explain: "AI is creating quizzes, summaries, and flashcards"
- Wait for content to appear (may take 1-3 minutes)

**5. Show Results - Summary Tab (30 seconds)**
- Show generated summary
- Tap "🔊 Read Summary" to demonstrate TTS
- Explain: "This is the hardware audio output"

**6. Show Results - Flashcards Tab (30 seconds)**
- Switch to Flashcards tab
- Show front/back cards
- Tap "🔊 Read Card" to demonstrate TTS

**7. Show Results - Quiz Tab (1-2 minutes)**
- Switch to Quiz tab
- Show multiple choice questions
- **Answer a question correctly:**
  - Tap correct answer
  - Show: Green highlight, "✓ Correct!" badge
  - Explain: "Immediate feedback with vibration"
- **Answer a question incorrectly:**
  - Tap wrong answer
  - Show: Red highlight, "✗ Incorrect" badge
  - Explain: "Different vibration pattern for errors"
- Tap "Reveal Answer" to show explanation
- Tap "🔊 Read Question" to demonstrate TTS

**8. Show Settings (20 seconds)**
- Tap settings icon
- Show: Backend configuration
- Explain: "Users can configure their backend IP address"

---

## Slide 10: Demo Preparation Checklist

### Before Presentation:

**Technical Setup:**
- [ ] Docker Desktop is installed and running
- [ ] All Docker services are running (`docker ps` shows 3 containers)
- [ ] Backend is accessible (`curl http://localhost:8000/`)
- [ ] Mobile app dependencies installed (`npm install` in mobile-app)
- [ ] Expo is installed (`npx expo --version`)
- [ ] Phone has Expo Go app installed
- [ ] Phone and computer on same WiFi network
- [ ] IP address configured in mobile app files

**Test Run:**
- [ ] Do a complete test run before presentation
- [ ] Have a test note ready (printed or handwritten)
- [ ] Verify all features work:
  - [ ] Camera scanning works
  - [ ] Content generation works
  - [ ] Quiz interaction works
  - [ ] TTS works
  - [ ] Vibration works

**Backup Plan:**
- [ ] Have screenshots/video ready in case demo fails
- [ ] Have backend logs ready to show if needed
- [ ] Know how to troubleshoot common issues

---

## Slide 11: Demo Troubleshooting

### If Demo Fails:

**Backend Not Responding:**
```powershell
# Check Docker
docker ps

# Check logs
docker-compose logs api-gateway

# Restart if needed
docker-compose restart
```

**Mobile App Won't Connect:**
- Check IP address in `mobile-app/services/api.js` and `mobile-app/App.js`
- Verify phone and computer on same WiFi
- Try: `npx expo start --tunnel`

**Content Generation Slow:**
- Explain: "LLM generation can take 1-3 minutes for long text"
- Show: "This is normal - the AI is processing your notes"

**Camera Not Working:**
- Check permissions in phone settings
- Restart Expo app

---

## Slide 12: Key Takeaways

### What We Achieved:
✅ Built a complete microservice-based mobile application
✅ Integrated hardware input (camera) and outputs (display, audio, haptic)
✅ Used AI (Ollama LLM) for content generation
✅ Generated 50%+ of code with AI assistance
✅ Created comprehensive documentation and tests

### Technical Highlights:
- **Microservice Architecture:** Scalable, maintainable
- **Docker Containerization:** Easy deployment
- **Local LLM:** Privacy-focused (no data sent to external services)
- **Real-time Feedback:** Immediate quiz results

### Learning Outcomes:
- AI-assisted development workflow
- Microservice design patterns
- Mobile app development with React Native
- Docker orchestration

---

## Slide 13: Q&A Preparation

### Anticipated Questions:

**Q: Why use Ollama instead of OpenAI/other APIs?**
A: Privacy - all processing happens locally, no data sent to external services. Good for educational content.

**Q: How accurate is the OCR?**
A: Tesseract works well for printed text. Handwritten text accuracy depends on image quality and handwriting clarity.

**Q: Can it handle multiple languages?**
A: Currently optimized for English. Tesseract supports multiple languages, but prompts are in English.

**Q: What's the response time?**
A: OCR is fast (<5 seconds). LLM generation takes 30-120 seconds depending on text length.

**Q: How much code was AI-generated?**
A: Approximately 60% of core integration code (API structures, service classes, Docker configs, React components).

**Q: What would you improve?**
A: 
- Better OCR accuracy for handwriting
- Offline mode support
- User authentication and data persistence
- More quiz customization options

---

## Presentation Tips

### Delivery:
1. **Practice the demo** at least 2-3 times before presentation
2. **Have a backup plan** (screenshots/video) if demo fails
3. **Speak clearly** and explain what you're doing as you demo
4. **Engage the audience** - ask if they can see the screen/phone
5. **Time management** - keep demo to 5-7 minutes

### Technical Tips:
- **Start services early** - have everything running before you start talking
- **Use a prepared note** - have a clear, well-lit note ready to scan
- **Test WiFi connection** - ensure stable connection before demo
- **Keep terminal/logs visible** - helpful if something goes wrong

### Visual Aids:
- **Show the phone screen** using screen mirroring if possible
- **Show backend logs** to demonstrate microservice communication
- **Use diagrams** to explain architecture (if time permits)

---

## Quick Reference: Demo Commands

### Start Everything:
```powershell
# Terminal 1: Start Docker
docker-compose up -d

# Terminal 2: Start Mobile App
cd mobile-app
npm start
```

### Verify Everything:
```powershell
# Check Docker
docker ps

# Check Backend
Invoke-WebRequest http://localhost:8000/

# Check Ollama
docker exec study-coach-ollama ollama list
```

### If Something Breaks:
```powershell
# Restart Docker
docker-compose restart

# Restart Mobile App
# Press Ctrl+C, then: npm start
```

---

## Presentation Timeline

| Time | Section | Duration |
|------|---------|----------|
| 0:00-2:00 | Introduction & Purpose | 2 min |
| 2:00-6:00 | Development Process & Tools | 4 min |
| 6:00-13:00 | Live Demonstration | 7 min |
| 13:00-15:00 | Q&A | 2 min |
| **Total** | | **15 min** |

---

## Notes for Presenters

1. **Rehearse the demo** - Practice makes perfect
2. **Prepare your note** - Have a clear, readable note ready
3. **Test everything** - Run through the entire flow before presenting
4. **Stay calm** - If something breaks, explain what's happening and troubleshoot
5. **Engage audience** - Make eye contact, ask if they can see clearly
6. **Highlight AI usage** - Emphasize the 50%+ AI-generated code requirement
7. **Show enthusiasm** - You built something cool, be proud of it!

---

**Good luck with your presentation! 🚀**

