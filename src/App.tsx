import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import ShowRequest from "./reviewer/components/ShowRequest";
import ReviewerHomePage from "./reviewer/pages/ReviewerHomePage";
import ShowBalance from "./reviewer/components/ShowBalance";
import PaidProjects from "./reviewer/components/PaidProjects";
import EmptyHomePage from "./reviewer/components/EmptyHomePage";
import ShowAllProperty from "./reviewer/components/ShowAllProperty";
import AddComment from "./reviewer/components/AddComment";
import ReportReviewer from "./reviewer/pages/ReportReviewer";
import SettingsReviewer from "./reviewer/pages/SettingsReviewer";
import TermsAndConditionsReviewer from "./reviewer/components/TermConditionsReviewer";
import Logout from "./reviewer/components/Logout";


function App() {
  return (
     

        <BrowserRouter>
          <Routes>
              
                {/*//* Reviewer */}
            <Route path="/" element={<ReviewerHomePage />} >
            <Route index element={<EmptyHomePage />} />
            <Route path="show-all-property" element={< ShowAllProperty />} />
            <Route path="add-comment" element={<AddComment />} />
            <Route path="report-reviewer" element={<ReportReviewer />} />
            <Route path="show-request" element={<ShowRequest />} />
            <Route path="show-balance" element={<ShowBalance />} />
            <Route path="paid-project" element={<PaidProjects />} />
            <Route path="terms-conditions-reviewer" element={<TermsAndConditionsReviewer/>} />
            <Route path="settings-reviewer" element={<SettingsReviewer />} />
            <Route path="logout" element ={<Logout />} />
        </Route>
        

                
            </Routes>
        </BrowserRouter>
    );
}

export default App;
