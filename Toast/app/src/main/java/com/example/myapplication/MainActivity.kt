package com.example.myapplication

import android.os.Bundle
import android.widget.Toast
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import com.example.myapplication.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {


    private lateinit var binding: ActivityMainBinding


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.buttonOla.setOnClickListener {

            val nome = binding.editNome.text.toString().trim()
            val snome = binding.editSobrenome.text.toString().trim()

            if (nome.isEmpty() || snome.isEmpty()) {
                binding.textResultado.text = "Nome não inserido"
                Toast.makeText(applicationContext, "Nome não inserido", Toast.LENGTH_SHORT).show()
            } else {
                binding.textResultado.text = "Ola $nome $snome"
                Toast.makeText(applicationContext, "Ola $nome $snome", Toast.LENGTH_LONG).show()

            }

        }

    }
}