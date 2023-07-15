import React from "react";

const Footer = () => {
  const productList = ["Market", "ERC20 Token", "Donation"];
  const contactList = [
"support@gautam_mandoliya",
"gautammandoliya2002@gmail.com",
"Contact Us",
  ];
  const usefullLink = ["Home", "About Us", "Company Bio"];
return (
    <footer className="text-center text-white backgroundMain 1g:text-left"> 
       <div className="mx-6 py-10 text-center md:text-left"> 
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">  
             <div className="">
               <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                    G-Fund
                    </h6>
                    <p>
                    Have a Great Day!
                    </p>
                    </div>
                    <div className="">
                    <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                    Products</h6>
                    {productList.map((el, i) => (
                      <p className="mb-4" key={i + 1}>
                         <a href="#!">{el}</a>
                      </p>
                      ))}
                      </div>
                      <div className="">
                        <h6 className="mb-4 flex justify-center font-semibold 
                        uppercase md:justify-start">
                        Useful Links
                        </h6>
                        {usefullLink.map((el, i) => 
                        ( <p className="mb-4" key={i + 1}>
                        <a href="#!">{el}</a>
                        </p>
                        ))}
                      </div>
                      <div>
                      <h6 className="mb-4 flex justify-center font-semibold 
                      uppercase md:justify-start">
                        Contact
                        </h6>
                        {contactList.map((el, i) => (
                        <p className="mb-4" key={i + 1}>
                        <a href="#!">{el}</a>
                        </p>
                        ))}
                      </div>
                  </div>
                </div>
              <div className="backgroundMain p-6 text-center">
                <span>© 2023 Copyright: </span>
                <a className="font-semibold" href="https://tailwind-elements.com/">
                      G-Fund
                </a>
              </div>
          </footer>
    );        

};

export default Footer;
