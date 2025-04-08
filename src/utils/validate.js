export const validateFullData = (name, surname, phone, username, fields, choice, text) => {
    if (!name.trim()) return "Iltimos, ismingizni kiriting";
    if (!surname.trim()) return "Iltimos, familyangizni kiriting";
    if (!phone.trim()) return "Iltimos, telefon raqamingizni kiriting";
    if (!username.trim()) return "Iltimos, foydalanuvchi nomini kiriting";
    if (!fields.trim()) return "Iltimos, hududni kiriting";
    if (!choice.trim()) return "Iltimos, tanlovni kiriting";
    if (!text.trim()) return "Iltimos, xabarni kiriting";
    return null; // Hammasi to'g'ri bo'lsa hech narsa qaytarmaydi
  };
  