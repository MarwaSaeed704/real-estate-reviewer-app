import '../styles/style.css'
import PropertyItem from './PropertyItem';
import building1 from '../../assets/reviewer/building1.png';
import building2 from '../../assets/reviewer/building2.png';
import building3 from '../../assets/reviewer/building3.png';
import building4 from '../../assets/reviewer/building4.png';
import building5 from '../../assets/reviewer/building5.png';
import building6 from '../../assets/reviewer/building6.png';


function ShowAllProperty() {
   

  interface BuildingInfo{
    buildingImage: string,
    buildName:string,
    buildingTitle: string,
    companyName: string,
  }


  const buildingsAvailable:BuildingInfo[] = [
    {
      buildingImage:building1,
      buildName:"عقار الشروق",
      buildingTitle: "عقار في شارع السند ، حي النرجس ، الرياض ، منطقة الرياض",
      companyName:"شركة عقاركم",
    },

      {
      buildingImage:building2,
      buildName:"عقار الشروق",
      buildingTitle: "عقار في شارع السند ، حي النرجس ، الرياض ، منطقة الرياض",
      companyName:"شركة عقاركم",
    },
       {
      buildingImage:building3,
      buildName:"عقار الشروق",
      buildingTitle: "عقار في شارع السند ، حي النرجس ، الرياض ، منطقة الرياض",
      companyName:"شركة عقاركم",
    },
        {
      buildingImage:building4,
      buildName:"عقار الشروق",
      buildingTitle: "عقار في شارع السند ، حي النرجس ، الرياض ، منطقة الرياض",
      companyName:"شركة عقاركم",
    },
         {
      buildingImage:building5,
      buildName:"عقار الشروق",
      buildingTitle: "عقار في شارع السند ، حي النرجس ، الرياض ، منطقة الرياض",
      companyName:"شركة عقاركم",
    },
          {
      buildingImage:building6,
      buildName:"عقار الشروق",
      buildingTitle: "عقار في شارع السند ، حي النرجس ، الرياض ، منطقة الرياض",
      companyName:"شركة عقاركم",
    },
       
      
         
  ];

  return ( 
      <> 
          {/* property-container */}
      <div className='w-full'>
        
              <div className='main-propert-dir p-4'> 
              <h3 className='main-font main-color font-medium '>الرئيسية &gt; عقارات </h3>
              </div>

          {/* show all property */}
          <div
      className=" grid grid-row grid-cols-3 gap-x-8 gap-y-18 mt-18 mr-8 ml-8 mb-18 pr-2 pl-2 max-sm:grid-cols-1 max-sm:gap-y-8 max-md:grid-cols-2 max-md:gap-y-10 max-lg:grid-cols-2 max-lg:gap-y-14"
    >
      {buildingsAvailable.map((build, index) => (
        <PropertyItem
            key={index}
            buildingImage={build.buildingImage}
            buildName={build.buildName}
            buildingTitle={build.buildingTitle}
            companyName={build.companyName}
          />
      )  
      )} 
          </div>
          {/*== show all property ==*/}
          
      </div>
      {/*== property-container ==*/}
      </>
  )
  
}

export default ShowAllProperty
