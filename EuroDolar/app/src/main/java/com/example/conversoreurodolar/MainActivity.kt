package com.example.conversoreurodolar

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.example.conversoreurodolar.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {

   private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        //enableEdgeToEdge()
        setContentView(binding.root)


        binding.buttonConverter.setOnClickListener{
            val boliviano = binding.editEuro.text.toString().toDouble()
            val real = String.format("%.2f", boliviano * 0.8)

            binding.textDolares.text = "R$ ${real}"
        }
    }
}