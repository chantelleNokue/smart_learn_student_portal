import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import 'antd/dist/reset.css';
import { ConfigProvider } from 'antd';
import { AuthProvider } from "./providers/auth/auth_context.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider theme={{
      token: {
        colorPrimary: "#2123bf"
      }
    }
    }>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ConfigProvider>
  </StrictMode>,
);
