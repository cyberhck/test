package com.project;

import android.util.Log;

import com.google.firebase.iid.FirebaseInstanceId;
import com.google.firebase.iid.FirebaseInstanceIdService;

public class MessagingRegistrationService extends FirebaseInstanceIdService {
    public MessagingRegistrationService() {
        Log.d("REACTNATIVE", "constructor ID service");
    }

    @Override
    public void onTokenRefresh(){
        String refreshedToken = FirebaseInstanceId.getInstance().getToken();
        Log.d("REACTNATIVEE",refreshedToken);
    }
}