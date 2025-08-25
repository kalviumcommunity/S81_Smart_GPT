# SmartGPT: AI Travel Planner  

## Overview  
SmartGPT is an **AI-powered travel planner** that generates **custom itineraries** using live data, user preferences, and smart recommendations.  
It reduces the hassle of manual trip planning by combining **Generative AI** with **real-time APIs** for flights, hotels, weather, and attractions.  

---

## Problem Statement  
Planning a trip is time-consuming. Travelers must:  
- Research destinations  
- Compare hotels and flights  
- Arrange activities and food  
- Stay within budget  

Most travel apps provide **static recommendations** without personalization or adaptability to real-time changes (weather, events, prices).  

---

## Solution  
SmartGPT acts as a **personal AI travel assistant**. It:  
- Creates **dynamic day-by-day itineraries**.  
- Considers **user preferences**: destination, budget, dates, group size, interests.  
- Integrates with **AI + external APIs** to fetch live information.  
- Provides **budget breakdowns** and **personalized recommendations**.  

---

## Features  
1. **Custom Itinerary Builder** – Generates clear morning/afternoon/evening activities.  
2. **Preference-Based Planning** – Adapts to budget, dates, and user interests.  
3. **Smart Budgeting** – Provides approximate cost estimates.  
4. **Live Data Integration** (Future Scope) – Weather, flights, and hotel APIs.  
5. **Group Planning** – Allows collaborative itinerary planning.  
6. **Future Expansion** – Voice input, AR/VR previews, AI expense tracker.  

---

## Tech Stack  

### **Frontend (React)**  
- React + Tailwind CSS (for responsive UI/UX)  
- Axios (to send requests to backend)  

### **Backend (Python)**  
- **FastAPI** (lightweight web framework for APIs)  
- **OpenAI Python SDK** (for AI-generated itineraries)  
- **Uvicorn** (for running FastAPI server)  

### **Database (Optional for MVP)**  
- MongoDB or SQLite (to store user preferences and past itineraries)  

### **External APIs (Future Scope)**  
- Google Maps API (locations)  
- Skyscanner/Amadeus API (flights)  
- Booking.com API (hotels)  
- Weather API (forecast)  

---

## Implementation Flow  

1. **User Input (Frontend)**  
   - User enters destination, budget, days, and interests.  

2. **Backend Processing (FastAPI)**  
   - Receives input via API endpoint.  
   - Constructs a **system + user prompt**.  
   - Calls **OpenAI API** to generate itinerary.  

3. **AI Itinerary Generation**  
   - Returns structured plan with activities, food, and estimated costs.  

4. **Frontend Rendering**  
   - React displays the itinerary in a clean card-based UI.  

5. **Database Storage (Optional)**  
   - Save user itineraries for later retrieval.  

---

## System Architecture  

