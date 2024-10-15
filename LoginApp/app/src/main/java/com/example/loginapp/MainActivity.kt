package com.example.loginapp

import android.content.Intent
import android.os.Bundle
import android.widget.Toast
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import com.example.loginapp.databinding.ActivityMain2Binding

class MainActivity : AppCompatActivity() {


    private lateinit var binding: ActivityMain2Binding


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMain2Binding.inflate(layoutInflater)
        enableEdgeToEdge()
        setContentView(binding.root)

        binding.buttonEntrar.setOnClickListener {
            val username = binding.editUsername.text.toString().trim()
            val password = binding.editPassword.text.toString().trim()


            if (username.equals("user") && password.equals("pass")) {
                Toast.makeText(applicationContext, "Login OK", Toast.LENGTH_SHORT).show()
                startActivity(Intent(this, LoginOkActivity::class.java))
            } else {
                Toast.makeText(applicationContext, "Login Inválido", Toast.LENGTH_SHORT).show()
                startActivity(Intent(this, LoginErradoActivity::class.java))

            }

            binding.editUsername.setText("")
            binding.editPassword.setText("")

        }
    }
}