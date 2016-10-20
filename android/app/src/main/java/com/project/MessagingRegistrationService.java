package com.project;

import android.util.Log;

import com.google.firebase.iid.FirebaseInstanceId;
import com.google.firebase.iid.FirebaseInstanceIdService;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;

public class MessagingRegistrationService extends FirebaseInstanceIdService {
    @Override
    public void onTokenRefresh(){
        String refreshedToken = FirebaseInstanceId.getInstance().getToken();
        this.sendToserver(refreshedToken);
        // send that token to server
    }

    private void sendToserver(String refreshedToken) {
        String ip = "http://192.168.0.100:8000/register/"+refreshedToken;
        try{
            URL url = new URL(ip);
            URLConnection conn = url.openConnection();
            HttpURLConnection httpURLConnection = (HttpURLConnection) conn;
            int responseCode = httpURLConnection.getResponseCode();
            if(responseCode == HttpURLConnection.HTTP_OK){
                InputStream in = httpURLConnection.getInputStream();
                BufferedReader r = new BufferedReader(new InputStreamReader(in));
            }else{
                throw new Exception("HTTP URL CONNECTION NOT OK:" + responseCode);
            }

        }catch (Exception e){
            Log.d("REACTNATIVE", e.getMessage());
        }

    }
}