package com.project;

import android.app.Notification;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.TaskStackBuilder;
import android.content.Intent;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteStatement;
import android.os.Bundle;
import android.support.v4.app.NotificationCompat;

import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;
import com.project.database.DbHelper;

public class MessagingService extends FirebaseMessagingService {
    @Override
    public void onMessageReceived(RemoteMessage remoteMessage) {
        DbHelper db = new DbHelper(this);
        SQLiteDatabase dbase = db.getWritableDatabase();
        SQLiteStatement statement = dbase.compileStatement("INSERT INTO newsletters (title, content, link) VALUES(?,?,?)");
        statement.bindString(1,remoteMessage.getData().get("title"));
        statement.bindString(2,remoteMessage.getData().get("content"));
        statement.bindString(3,"https://www.crazy-factory.com/en-GB/");
        statement.execute();
        this.createNotificationFromRemoteMessage(remoteMessage);
    }

    private void createNotificationFromRemoteMessage(RemoteMessage remoteMessage){
        Intent intent = new Intent(this, MainActivity.class);
        Bundle bundle = new Bundle();
        bundle.putParcelable("data", remoteMessage);
        intent.putExtras(bundle);

        TaskStackBuilder taskStackBuilder = TaskStackBuilder.create(this);
        taskStackBuilder.addNextIntent(intent);


        PendingIntent pendingIntent =
                taskStackBuilder.getPendingIntent(0, PendingIntent.FLAG_UPDATE_CURRENT);

        NotificationCompat.Builder notificationBuilder = new NotificationCompat.Builder(this);
        notificationBuilder.setContentTitle(remoteMessage.getData().get("title"));
        notificationBuilder.setContentText(remoteMessage.getData().get("content"));
        notificationBuilder.setSmallIcon(R.drawable.ic_stat_name);

        notificationBuilder.setContentIntent(pendingIntent);

        Notification notification = notificationBuilder.build();

        NotificationManager nManager = (NotificationManager) getSystemService(NOTIFICATION_SERVICE);
        nManager.notify(11211, notification);
    }
}