import { Card } from "antd";

const Cardcompo: React.FC = () => {
  return (
    <div className="w-[260px] h-[110px] rounded-[24px] overflow-hidden">
      <Card
        className="!h-full !w-full !rounded-[24px] !bg-gradient-to-r !from-blue-500 !to-indigo-600 !text-white 
                   flex flex-col justify-center items-start shadow-lg border-none"
      >
        <p className="text-sm opacity-90 ">จำนวนผู้ใช้งาน</p>
        <h2 className="text-3xl font-bold">42</h2>
        
      </Card>
    </div>
  );
};

export default Cardcompo;
