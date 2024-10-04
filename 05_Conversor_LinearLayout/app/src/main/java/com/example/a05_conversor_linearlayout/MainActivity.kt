package com.example.a05_conversor_linearlayout

import android.os.Bundle
import android.widget.Toast
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import com.example.a05_conversor_linearlayout.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding



    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        enableEdgeToEdge()
        setContentView(binding.root)

        binding.buttonConverter.setOnClickListener{
            val reais = binding.editReais.text.toString().trim()

            if(!reais.isEmpty()) {
                val dolar = String.format("%.2f",reais.toDouble() * 0.18)
                binding.textDolares.setText("${dolar}$")
                Toast.makeText(applicationContext, "O valor em dolares é ${dolar}$", Toast.LENGTH_LONG).show()
            } else {
                binding.textDolares.text = "Valor não inserido"
                Toast.makeText(applicationContext, "Valor não inserido", Toast.LENGTH_SHORT).show()
            }
        }

    }
}