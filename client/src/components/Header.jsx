import { Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h6 className="text-center text-green-700 bg-green-100">
        Giao hàng siêu tốc trong 2h tại Hà Nội
      </h6>
      <div className="text-white bg-[#12433d] h-[100px] flex items-center">
        <div className="flex justify-between items-center m-auto w-7/12">
          <h1>Logo here</h1>
          <div className="flex gap-12 items-center text-white uppercase">
            <ul className="flex gap-4">
              <Link to="ve-chung-toi">
                <li>Về Chúng Tôi</li>
              </Link>
              <Link to="san-pham-le">
                <li>Sản phẩm lẻ</li>
              </Link>
              <Link to="combo-san-pham">
                <li>Combo sức khỏe</li>
              </Link>
              <Link to="tinh-bmi">
                <li>Tính BMI</li>
              </Link>
              <Link to="kien-thuc-dinh-duong">
                <li>Tin tức</li>
              </Link>
              <Link to="ve-chung-toi">
                <li>Liên hệ</li>
              </Link>
            </ul>
            <div className="flex gap-4 items-center">
              <Search />
              <Avatar />
              {/* INBOX: __PLAN(){} &0& #0# ._. Add Shopping Cart icon */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
