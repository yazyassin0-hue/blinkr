import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';  // استيراد مكون تسجيل الدخول
import SignUp from './pages/SignUp';  // استيراد مكون إنشاء الحساب

const App = () => {
  return (
    <Router>
      <Switch>
        {/* تعريف المسار لصفحة تسجيل الدخول */}
        <Route path="/login" component={Login} />
        
        {/* تعريف المسار لصفحة إنشاء الحساب */}
        <Route path="/signup" component={SignUp} />
        
        {/* المسار الرئيسي لعرض رسالة ترحيب */}
        <Route path="/" exact>
          <h1>مرحبا بك في التطبيق</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
