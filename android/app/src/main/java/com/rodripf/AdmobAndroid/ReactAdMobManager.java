package com.rodripf.AdmobAndroid;

import android.widget.Toast;
import android.view.View;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.ReactProp;

import com.google.android.gms.ads.AdView;
import com.google.android.gms.ads.AdSize;
import com.google.android.gms.ads.AdRequest;
import com.google.android.gms.ads.AdListener;


import java.util.HashMap;

import java.util.Map;

public class ReactAdMobManager extends SimpleViewManager<AdView> {

    private AdView mAdView;

    @ReactProp(name = "src")
    public void setSrc(AdView view, String src) {
        //Log.d("ReactAdMobManager", "inside set src");
    }

    public static final String REACT_CLASS = "RCTAdMobView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

public static boolean d = false;

    @Override
    public AdView createViewInstance(ThemedReactContext context) {
        //Log.d("ReactAdMobManager", "inside create view instance");
        mAdView = new AdView(context);
        
        mAdView.setAdSize(AdSize.LARGE_BANNER);
        mAdView.setAdUnitId("ca-app-pub-3587283398271880/9131849251");

        mAdView.setAdListener(new AdListener() {
            @Override
            public void onAdLoaded() {
                System.out.println("ad banner finished loading!");
 
                ReactAdMobManager.d = true;
            }
        });

        // Create an ad request.
        if(!ReactAdMobManager.d){
            AdRequest adRequest = new AdRequest.Builder().addTestDevice("D57F5B8E254117FD").build();
            //adRequest.
             mAdView.loadAd(adRequest);
        }else{
            mAdView.resume();
        }
        

        return mAdView;

    }

}