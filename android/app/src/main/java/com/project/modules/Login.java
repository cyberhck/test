package com.project.modules;


import android.util.Log;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.io.DataOutputStream;
import java.net.URL;

import javax.net.ssl.HttpsURLConnection;

public class Login extends ReactContextBaseJavaModule{

    public Login(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "Login";
    }
    @ReactMethod
    public void authenticate(String email, String password, Promise promise){
        try{
            URL url = new URL("https://www.crazy-factory.com/process_login.php");
            HttpsURLConnection https = (HttpsURLConnection) url.openConnection();
            https.setRequestMethod("POST");
            https.setDoOutput(true);
            https.setInstanceFollowRedirects(false);

            DataOutputStream out = new DataOutputStream(https.getOutputStream());
            out.writeBytes("email_address="+email+"&password="+password);
            out.flush();
            String cookie = https.getHeaderFields().get("set-cookie").get(0).split(";")[0].split("=")[0];
            //also send go server the token
            promise.resolve(cookie);
        }catch (Exception e){
            Log.wtf("REACTNATIVE", "WTF: "+e.getMessage());
            promise.reject("E_LOGIN_ERROR", e.getMessage());
        }
    }

}
