package com.example.primeiroapp

import android.os.Bundle
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import com.example.primeiroapp.databinding.ActivityMain2Binding

class MainActivity2 : AppCompatActivity() {

    private lateinit var binding: ActivityMain2Binding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMain2Binding.inflate(layoutInflater)
        enableEdgeToEdge()
        setContentView(binding.root)

        binding.buttonOla.setOnClickListener{
            val nome = binding.editName.text.toString()
           // binding.textResultado.text = "Olá " + nome
            binding.textResultado.setText("Olá ${nome}");
            


        }

    }
}

