import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ExperiencePage from './pages/ExperiencePage';
import EducationPage from './pages/EducationPage';
import PublicationPage from './pages/PublicationPage';
import SkillPage from './pages/SkillPage';
import AcademicServicePage from './pages/AcademicServicePage';
import ExtraCurricularPage from './pages/ExtraCurricularPage'
import SeminarWorkshopPage from './pages/SeminarWorkshopPage'
import AccomplishmentPage from './pages/AccomplishmentPage';
import Test1 from './components/Test1';

function App() {
  return (
    // <Test1/>
    <BrowserRouter>
      <Routes>
        <Route path="/accomplishment" element={<AccomplishmentPage/>} />
        <Route path="/seminar-workshops" element={<SeminarWorkshopPage/>} />
        <Route path="/extracurricular-activities" element={<ExtraCurricularPage/>} />
        <Route path="/academic-service" element={<AcademicServicePage/>} />
        <Route path="/skills" element={<SkillPage/>} />
        <Route path="/publications" element={<PublicationPage/>}/>
        <Route path="/education" element={<EducationPage/>}/>
        <Route path='/experience' element={<ExperiencePage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
