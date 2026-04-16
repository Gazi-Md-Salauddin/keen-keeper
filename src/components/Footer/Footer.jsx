import React from "react";
import Footerlogo from "../../assets/logo-xl.png";
import Instagram from "../../assets/instagram.png";
import Facebook from "../../assets/facebook.png";
import Twitter from "../../assets/twitter.png";

const Footer = () => {
    return (
        <div>
            <div className="bg-[#235242] text-white text-center px-4 pt-6 md:pt-10 px-6 space-y-4">
                <div className="flex justify-center pt-6">
                    <img src={Footerlogo} alt="Footer Logo" />
                </div>
                <p>
                    Your personal shelf of meaningful connections. Browse, tend,
                    and nurture the relationships that matter most.
                </p>
                <h2 className="text-md font-bold">Social Links</h2>
                <div className="flex justify-center gap-2">
                    <img src={Instagram} />
                    <img src={Facebook} />
                    <img src={Twitter} />
                </div>

                <div className="flex-1 md:flex justify-between mt-4 pb-4">
                    <div>
                        <p>&copy;2026 keenkeeper. All rights reserved. </p>
                    </div>
                    <div className="flex gap-3">
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookies</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
