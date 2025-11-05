import React from "react";
import Icon from "./iconsbutton";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white pt-6">
      <div className="px-5 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* โลโก้ */}
          <div className="text-center md:me-4">
            <img
              src="/imges/BAAC_Logo.svg 1.png"
              alt="BAAC Logo"
              className="w-28 mx-auto md:mx-0"
            />
          </div>

          {/* ช่องทางการติดต่อ */}
          <div className="flex-1">
            <h6 className="font-bold mb-2 text-lg">ช่องทางการติดต่อ</h6>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <p className="text-sm mb-1">
                  ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร (ธ.ก.ส.)
                </p>
                <p className="text-sm mb-1">
                  ที่อยู่ : เลขที่ 2346 ถนนพหลโยธิน แขวงเสนานิคม เขตจตุจักร
                </p>
                <p className="text-sm mb-1">กรุงเทพฯ 10900</p>
              </div>
              <div className="pl-0 md:pl-10">
                <p className="text-sm mb-2">โทรศัพท์ : 0-2555-0555</p>
                <p className="text-sm mb-2">โทรสาร : 0-2558-6341</p>
                <p className="text-sm mb-0">E-mail : contact@baac.or.th</p>
              </div>
            </div>
          </div>

          {/* สื่อสังคมออนไลน์ */}
          <div className="flex flex-col items-start md:items-end">
            <h6 className="font-bold mb-3 text-lg">สื่อสังคมออนไลน์</h6>
            <div className="flex gap-2 flex-wrap">
              <Icon iconName="Facebook" />
              <Icon iconName="line" />
              <Icon iconName="Youtube" />
              <Icon iconName="TikTok" />
              <Icon iconName="Instragram" />
              <Icon iconName="X" />
              <Icon iconName="rss 1" />
            </div>
          </div>
        </div>

        <hr className="border-t border-white/40 my-4" />

        <div className="text-center pb-3">
          <small className="text-xs">
            © All Rights Reserved. BAAC Version 1.0.0
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
