import { Link } from "@mui/material";
import logoImage from "../../assets/Logo-removebg-preview.png";

const Logo = () => {
  return (
    <div className="items-center justify-center gap-4 hidden min-[1300px]:flex">
      <Link href="/">
        {/* Thay thế toàn bộ thẻ <svg> bằng thẻ <img> của bạn */}
        <div className="w-40 h-[50px] bg-white p-1 flex items-center justify-center rounded-lg shadow-sm cursor-pointer hover:scale-125 transition-transform overflow-hidden">
            <img 
              src={logoImage} 
              alt="GearRig Logo" 
              className="w-full h-full object-contain scale-125" 
            />
        </div>
      </Link>
      
      {/* Nếu trong ảnh logo của bạn đã có sẵn chữ GearRig rồi thì bạn có thể xóa luôn dòng <h1> bên dưới đi cho đỡ lặp chữ */}
      <h1 className="font-inter font-bold text-2xl ">GearRig</h1>
    </div>
  );
};

export default Logo;