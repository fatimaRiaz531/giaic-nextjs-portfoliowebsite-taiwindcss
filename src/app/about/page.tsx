// // app/about/page.tsx
// import Link from 'next/link';
// import Image from 'next/image';

// const AboutPage = () => {
//   return (
//     <section className="about">
//       <div className="about-img md:w-1/2 mb-6 md:mb-0 ml-2 items-center flex-justify-end ">
//         <Link href="/about" className="about flex flex-col md:flex-row items-center justify-center p-6">
//           {/* Link text or icon here */}
//           <h2 className="text-2xl font-bold mb-2">About <span className="text-blue-500">Me</span></h2>
//         </Link>
//         <Image
//           src="/girlpic.jpg"
//           alt="Web Design Technology"
//           width={500} // Adjust width as per your image size
//           height={300} // Adjust height as per your image size
//           className="rounded-lg shadow-lg"
//         />
//       </div>
//       <div className="about-text md:w-1/2 md:pl-6 ml-2 text-center">
       
//         <h4 className="text-xl mb-4">Web Developer</h4>
//         <p className="mb-4">
//           My name is Fatima, and I am a skilled web developer proficient in JavaScript,
//           TypeScript, HTML, and CSS. I enjoy creating responsive and interactive web 
//           applications that enhance user experience. With a strong command of front-end 
//           technologies, I strive to build efficient and visually appealing websites that 
//           meet client needs and industry standards.
//         </p>
//         <a href="#" className="btn-box bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
//           More About Me
//         </a>
//       </div>
//     </section>
//   );
// };

// export default AboutPage;




import Link from 'next/link';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <section className="about flex md:flex-row flex-col-reverse items-center">
      <div className="about-text md:w-1/2 md:pl-6 text-center md:text-left ml-2 mb-6 md:mb-0 ">
        <Link href="/about" className="about flex flex-col items-center justify-center p-6">
          <h2 className="text-2xl font-bold mb-2">About <span className="text-blue-500">Me</span></h2>
        </Link>
        <h4 className="text-xl mb-4">Web Developer</h4>
        <p className="mb-4">
          My name is Fatima, and I am a skilled web developer proficient in JavaScript,
          TypeScript, HTML, and CSS. I enjoy creating responsive and interactive web 
          applications that enhance user experience. With a strong command of front-end 
          technologies, I strive to build efficient and visually appealing websites that 
          meet client needs and industry standards.
        </p>
        <a href="#" className="btn-box bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
          More About Me
        </a>
      </div>
      
      <div className="about-img md:w-1/2 flex justify-end mt-8 mr-6 ml-6">
        <Image
          src="/girlpic.jpg"
          alt="Web Design Technology"
          width={500} // Adjust width as per your image size
          height={300} // Adjust height as per your image size
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default AboutPage;