import { useState, useEffect } from "react";
import { Table } from "antd";
import { Image, Checkbox } from "antd";
import axios from "axios";
import type { CheckboxValueType } from "antd/es/checkbox/Group";

const lesson5 = () => {
  const [rowData, setRowData] = useState<
    {
      id: number;
      title: string;
      description: string;
      price: number;
      discountPercentage: number;
      rating: number;
      stock: number;
      brand: string;
      category: string;
      thumbnail: string;
      images: string;
    }[]
  >([]);

  const defaultCheckedList = [
    "ID",
    "Title",
    "Description",
    "Price",
    "Rating",
    "Brand",
    "Thumbnail",
  ];

  const [checkedList, setCheckedList] =
    useState<CheckboxValueType[]>(defaultCheckedList);

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
  };
  const [isActive, setIsActive] = useState(false);

  const options = [
    { label: "ID", value: "ID" },
    { label: "Title", value: "Title" },
    { label: "Description", value: "Description" },
    { label: "Price", value: "Price" },
    { label: "Discountpercentage", value: "Discountpercentage" },
    { label: "Rating", value: "Rating" },
    { label: "Stock", value: "Stock" },
    { label: "Brand", value: "Brand" },
    { label: "Category", value: "Category" },
    { label: "Thumbnail", value: "Thumbnail" },
    { label: "Images", value: "Images" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products?limit=100"
        );
        setRowData(response.data.products);
      } catch (error) {
        console.log("Lỗi khi lấy dữ liệu", error);
      }
    };
    fetchData();
  }, []);

  const columns = [
    { dataIndex: "id", title: "ID", width: 50 },
    { dataIndex: "title", title: "Title", width: 100 },
    { dataIndex: "description", title: "Description", width: 150 },
    {
      dataIndex: "price",
      title: "Price",
      width: 50,
      render: (text: string) => <span>${text}</span>,
    },
    {
      dataIndex: "discountPercentage",
      title: "DiscountPercentage",
      width: 80,
      render: (text: string) => <span>{text}%</span>,
    },
    { dataIndex: "rating", title: "Rating", width: 60 },
    {
      dataIndex: "stock",
      title: "Stock",
      width: 60,
    },
    { dataIndex: "brand", title: "Brand", width: 80 },
    { dataIndex: "category", title: "Category", width: 100 },
    {
      dataIndex: "thumbnail",
      title: "Thumbnail",
      width: 100,
      render: (image: string) => (
        <Image
          src={image}
          alt="image"
          style={{ width: "75px", height: " 75px" }}
        />
      ),
    },
    {
      dataIndex: "image",
      title: "Image",
      width: 100,
      render: (image: string) => (
        <Image
          src={image}
          alt="image"
          style={{ width: "32px", height: "32px", borderRadius: "50%" }}
        />
      ),
    },
  ];

  return (
    <div className="overflow-auto">
      <p className="mb-6 font-bold">
        Thực hành xử lý bảng + dữ liệu ( dynamic table )
      </p>
      <div>
        <div>
          <div
            className="flex justify-between w-[200px] z-20 items-center px-[14px] py-1.5 border rounded-md text-black cursor-pointer ml-[50vw] absolute mt-[1vh] cursor-pointer"
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            Columns
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="mt-1"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M128 192l128 128 128-128z"></path>
            </svg>
          </div>
          {isActive && (
            <div className="absolute ml-[44.5vw] mt-[22vh] z-50 top-5 border border-black shadow-[0px_4px_6px_rgba(0_0_0_0.08)] bg-white w-[306px] ">
              <div className="flex flex-col gap-3 px-5 py-4">
                <h2 className="text-xl font-medium">Columns</h2>
                <input
                  type="text"
                  placeholder="Search"
                  className="py-[10px] px-4 border border-black border-opacity-30 w-full"
                ></input>
              </div>
              <div className="flex flex-col max-h-[300px] gap-4 pt-3 pb-5 pl-5 overflow-y-auto border border-black border-opacity-20">
                <button className="text-left text-blue-500 border-none">
                  Restore Defaults
                </button>
              </div>
              <Checkbox.Group
                options={options}
                value={checkedList}
                onChange={onChange}
              />
              <div className="flex items-center justify-end gap-3 p-[12px_16px] ">
                <button className="p-[10px_16px] border border-black border-opacity-20 text-sm text-black">
                  Cancel
                </button>
                <button className="p-[10px_16px] border border-black border-opacity-20 text-sm text-black btn-isActive">
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
        <Table
          dataSource={rowData}
          columns={columns}
          pagination={{
            position: ["topRight"],
            pageSizeOptions: ["10", "20", "30", "50", "80", "100"],
            showSizeChanger: true,
          }}
        />
      </div>
    </div>
  );
};

export default lesson5;
