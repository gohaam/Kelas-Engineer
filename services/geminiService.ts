
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";
const ai = new GoogleGenAI({ apiKey: API_KEY });

export const getCareerAdvice = async (message: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: message,
      config: {
        systemInstruction: "Anda adalah asisten karier AI untuk 'Kelas Engineer Indonesia'. Tugas Anda adalah memberikan saran tentang jalur karier teknik (sipil, elektro, mesin, dll.) dan merekomendasikan keterampilan yang harus dipelajari. Jawab dalam Bahasa Indonesia yang profesional dan ramah. Singkat dan padat.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Maaf, saya sedang mengalami kendala teknis. Silakan coba lagi nanti.";
  }
};
