package com.project;

import android.util.Log;

import com.facebook.react.ReactActivity;
import com.google.firebase.iid.FirebaseInstanceId;

public class MainActivity extends ReactActivity {

    @Override
    protected String getMainComponentName() {
        String refreshedToken = FirebaseInstanceId.getInstance().getToken();
        if(refreshedToken != null){
            Log.e("REACTNATIVE", refreshedToken);
        }
        return "Home";
    }
}
