import React from "react";
import Image from "next/image";

const ListProduct = ({ list }) => {
  return (
    <div className="flex justify-start items-center gap-3 mb-2">
      <Image src="/assets/icon-list.svg" width={24} height={24} />
      <p className="text-[#23232D] text-md font-medium">{list}</p>
    </div>
  );
};

export default ListProduct;
