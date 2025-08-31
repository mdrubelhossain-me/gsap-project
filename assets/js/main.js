// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  //From
  gsap.from(".imagOne", {
    duration: 3,
    delay: 1,
    x: 400,
    opacity: 0.5,
    ease: "power2.out",
  });

  //FromTO
  gsap.fromTo(
    ".imagTwo",
    {
      x: -400, // শুরুর অবস্থা (বাম দিকে 400px)
      opacity: 0, // শুরুর অবস্থা (অদৃশ্য)
      //   delay: 1,
    },
    {
      duration: 3, // ৩ সেকেন্ড অ্যানিমেশন
      x: 0, // আসল জায়গায় আসবে
      opacity: 1, // পুরো দৃশ্যমান হবে
      ease: "power2.out", // শুরুতে দ্রুত, শেষে ধীরে
      //   delay: 1,
      repeat: -1, // পুনরাবৃত্তি হবে
      yoyo: true, // উল্টো দিকে অ্যানিমেশন হবে
    }
  );
});
