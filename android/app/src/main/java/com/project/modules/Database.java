package com.project.modules;


import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.project.database.DbHelper;

import org.json.JSONArray;
import org.json.JSONObject;

public class Database extends ReactContextBaseJavaModule{

    private DbHelper db;
    private ReactApplicationContext mcontext;
    public Database(ReactApplicationContext reactContext) {
        super(reactContext);
        this.mcontext = reactContext;
        this.db = new DbHelper(reactContext);
    }

    @Override
    public String getName() {
        return "Database";
    }
    @ReactMethod
    public void query(String sql){
        SQLiteDatabase database = db.getWritableDatabase();
        database.execSQL(sql);
    }
    @ReactMethod
    public void select(String sql, Promise promise){
        try{
            SQLiteDatabase database = db.getWritableDatabase();
            Cursor c = database.rawQuery(sql, null);
            JSONArray json = this.getCursorAsJSONArray(c);
            promise.resolve(json.toString());
        }catch (Exception e){
            promise.reject("DatabaseError",e);
            Log.wtf("REACTNATIVE", "WTF: "+e.getMessage());
        }
    }

    private JSONArray getCursorAsJSONArray(Cursor c) throws Exception{
        JSONArray jsonArray = new JSONArray();
        int rows = c.getCount();
        for(int i = 0; i < rows; i++){
            jsonArray.put(this.getCursorPositionAsJSONObject(c, i));
        }
        return jsonArray;
    }

    private JSONObject getCursorPositionAsJSONObject(Cursor cursor, int position) throws Exception{
        cursor.moveToPosition(position);
        int count = cursor.getColumnCount();
        JSONObject json = new JSONObject();
        for(int i = 0; i < count; i++){
            json.put(cursor.getColumnName(i), cursor.getString(i));
        }
        return json;
    }
}
