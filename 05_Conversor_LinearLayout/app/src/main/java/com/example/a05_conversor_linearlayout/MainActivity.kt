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

        binding.buttonDolar.setOnClickListener {
            escrever(0.18)

        }
        binding.buttonEuro.setOnClickListener {
            escrever(0.17)
        }
        binding.buttonPesos.setOnClickListener {
            escrever(7.69)

        }

        private fun escrever(taxa: Double) {

            val reais = binding.editReais.text.toString().trim()

            if (!reais.isEmpty()) {
                val resultado = String.format("%.2f", reais.toDouble() * taxa)
                Toast.makeText(
                    applicationContext,
                    "O valor em Dolares é ${resultado}$",
                    Toast.LENGTH_LONG
                ).show()
            } else {

                Toast.makeText(applicationContext, "Valor não inserido", Toast.LENGTH_SHORT).show()
            }
        }
    }
}