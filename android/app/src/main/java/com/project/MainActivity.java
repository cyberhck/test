package com.project;


import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.google.firebase.messaging.RemoteMessage;

import org.json.JSONObject;

public class MainActivity extends ReactActivity {

    Bundle passToJS = new Bundle();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Intent i = getIntent();
        RemoteMessage remoteMessage = this.getRemoteMessage(i);
        if(remoteMessage == null){
            return;
        }
        JSONObject json = new JSONObject(remoteMessage.getData());
        String data = json.toString();
        this.passToJS.putString("data", data);
    }
    protected RemoteMessage getRemoteMessage(Intent intent){
        Bundle b = intent.getExtras();
        if(b == null || b.getParcelable("data") == null){
            return null;
        }
        return b.getParcelable("data");
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Nullable
            @Override
            protected Bundle getLaunchOptions() {
                Bundle initialProps = passToJS;
                return initialProps;
            }
        };
    }

    protected
    @Nullable
    Bundle getLaunchOptions() {
        return this.passToJS;
    }

    @Override
    protected String getMainComponentName() {
        return "Home";
    }
}
