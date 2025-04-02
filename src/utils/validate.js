export const validateFullData=(name,surname,phone,username,fileds,choes,text)=>{
    if(!name.trim()) return "Iltimos ismni kiriting";
    if(!surname.trim()) return "Iltimos familyani kiriting";
    if(!phone.trim()) return "Iltimos telifon raqamni kiriting";
    if(!username.trim()) return "Iltimos usernameni kiriting";
    if(!fileds.trim()) return "Iltimos hududni kiriting";
    if(!choes.trim()) return "Iltimos tanlang kiriting";
    if(!text.trim()) return "Iltimos message kiriting";
}