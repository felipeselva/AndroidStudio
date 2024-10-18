package com.example.menurestaurante

import android.content.Intent
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity

class SplashScreenActivity : AppCompatActivity() {


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_splash_screen)

        Handler(Looper.getMainLooper()).postDelayed({
            val i = intent;
            val j = Intent(this, DadosPedidoActivity::class.java)
            j.putExtras(i)
            startActivity(j)
        }, 2000)

    }
}