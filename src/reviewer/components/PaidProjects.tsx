
import PaidProjectsItems from "./PaidProjectsItems"
import building1 from '../../assets/reviewer//building1.png'
import building2 from '../../assets/reviewer//building2.png'
import building3 from '../../assets/reviewer//building3.png'
import building4 from '../../assets/reviewer//building4.png'
import building5 from '../../assets/reviewer//building5.png'
import building6 from '../../assets/reviewer//building6.png'
function PaidProjects() {

  interface BuildingInfo{
    buildingImage:string,
    buildingTitle: string,
    buildingPrice: string,
    buildingDescription:string,
  }

  
  const buildingsAvailable: (BuildingInfo)[] = [
    {
      buildingImage: building1,
      buildingTitle: "عقار في شارع السند ، حي النرجس ، الرياض ، منطقة الرياض",
      buildingPrice: "85,000 ريال سعودي",
      buildingDescription:
        "تكون من صالة ومجلس وثلاث غرف نوم ومطبخ و ثلاث دورات مياه وتراس و مطل على الشارع  بمساحة 138م..........."
    },
     {
      buildingImage: building2,
      buildingTitle: "عقار في شارع السند ، حي النرجس ، الرياض ، منطقة الرياض",
      buildingPrice: "85,000 ريال سعودي",
      buildingDescription:
        "تكون من صالة ومجلس وثلاث غرف نوم ومطبخ و ثلاث دورات مياه وتراس و مطل على الشارع  بمساحة 138م..........."
    },
      {
      buildingImage: building3,
      buildingTitle: "عقار في شارع السند ، حي النرجس ، الرياض ، منطقة الرياض",
      buildingPrice: "85,000 ريال سعودي",
      buildingDescription:
        "تكون من صالة ومجلس وثلاث غرف نوم ومطبخ و ثلاث دورات مياه وتراس و مطل على الشارع  بمساحة 138م..........."
    },
       {
      buildingImage: building4,
      buildingTitle: "عقار في شارع السند ، حي النرجس ، الرياض ، منطقة الرياض",
      buildingPrice: "85,000 ريال سعودي",
      buildingDescription:
        "تكون من صالة ومجلس وثلاث غرف نوم ومطبخ و ثلاث دورات مياه وتراس و مطل على الشارع  بمساحة 138م..........."
    },
        {
      buildingImage: building5,
      buildingTitle: "عقار في شارع السند ، حي النرجس ، الرياض ، منطقة الرياض",
      buildingPrice: "85,000 ريال سعودي",
      buildingDescription:
        "تكون من صالة ومجلس وثلاث غرف نوم ومطبخ و ثلاث دورات مياه وتراس و مطل على الشارع  بمساحة 138م..........."
    },
         {
      buildingImage: building6,
      buildingTitle: "عقار في شارع السند ، حي النرجس ، الرياض ، منطقة الرياض",
      buildingPrice: "85,000 ريال سعودي",
      buildingDescription:
        "تكون من صالة ومجلس وثلاث غرف نوم ومطبخ و ثلاث دورات مياه وتراس و مطل على الشارع  بمساحة 138م..........."
    },
         
  ];

  return (
    <div
      className="w-full grid grid-row grid-cols-3 gap-x-8 gap-y-18 mt-18 mr-8 ml-8 mb-18 pr-2 pl-2 max-sm:grid-cols-1 max-sm:gap-y-8 max-md:grid-cols-2 max-md:gap-y-10 max-lg:grid-cols-2 max-lg:gap-y-14"
    >
      {buildingsAvailable.map((build, index) => (
        <PaidProjectsItems
            key={index}
            buildingImage={build.buildingImage}
            buildingTitle={build.buildingTitle}
            buildingPrice={build.buildingPrice}
            buildingDescription={build.buildingDescription}
          />
      )  
      )} 
    </div>
  )
}

export default PaidProjects
