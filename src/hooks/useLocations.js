

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { authPath, LayOut } from '../services/Path';

export default function useLocations() {

    const navigate = useNavigate();

    // AUTH FORWARDS
    const goToLogin = React.useCallback(() => navigate(authPath.login), [navigate]);

    // LAYOUT FORWARDS

    const goToHome = React.useCallback(() => navigate(LayOut.home), [navigate]);

  return {
        goToLogin,
        goToHome
    }
}
