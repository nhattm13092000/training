import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import { Table } from "antd";
import { Image, Typography  } from "antd";
import moment from "moment";

const Lesson3 = () => {
  const [rowData, setRowData] = useState<{
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    image: string;
    address: string;
    birthDay: Date;
    sex: string;
    jobArea: string;
    phone: string;
    subscriptionTier: string;
  }[]>([]);
  
  useEffect(() => {
    const newData: {
      id: number;
      firstName: string;
      lastName: string;
      age: number;
      image: string;
      address: string;
      birthDay: Date;
      sex: string;
      jobArea: string;
      phone: string;
      subscriptionTier: string;
    }[] = [];
    for (let i = 1; i <= 100; i++) {
      const id = i;
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();
      const age = faker.datatype.number({ min: 18, max: 60 });
      const image = faker.image.avatar();
      const address = faker.location.streetAddress();
      const birthDay = faker.date.birthdate();
      const sex = faker.person.sex();
      const jobArea = faker.person.jobArea();
      const phone = faker.phone.number();
      const subscriptionTier = faker.person.jobDescriptor();

      newData.push({ id, firstName, lastName, age, image, address, birthDay, sex, jobArea, phone, subscriptionTier });
    }
    setRowData(newData);
    
  }, []);



  const columns = [
    { dataIndex: "id", title: "ID", width: 60 },
    { dataIndex: "firstName", title: "First Name", width: 150 },
    { dataIndex: "lastName", title: "Last Name", width: 150 },
    { dataIndex: "age", title: "Age", width: 70 },
    { dataIndex: "address", title: "Address", width: 200 },
    { 
      dataIndex: "birthDay", 
      title: "BirthDay", 
      width: 120,
      render: (birthDay: Date) => <Typography.Text>{moment(birthDay).format("DD-MM-YYYY")}</Typography.Text>
    },
    { dataIndex: "sex", title: "Sex", width: 80 },
    { dataIndex: "jobArea", title: "Job Area", width: 150 },
    { dataIndex: "phone", title: "Phone", width: 200 },
    { dataIndex: "subscriptionTier", title: "Subscription Tier", width: 150 },
    {
      dataIndex: "image",
      title: "Avatar",
      width: 100,
      render: (image: string) => (
        <Image src={image} alt="Avatar" style={{ width: "32px", height: "32px", borderRadius: "50%" }} />
      ),
    },
    { 
      dataIndex: "action", 
      title: "Action",
      width: 250,
    },
  ];
  return (
    <div className="h-[100%]">
      <p className="mb-6 font-bold">Thực hành mockup data</p>
      <div className="w-[100%]">
        <Table dataSource={rowData} columns={columns}/>
      </div>
    </div>
  );
};

export default Lesson3;


