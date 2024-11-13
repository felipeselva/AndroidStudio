package com.example.sharedpreferences

import android.content.Context
import android.os.Bundle
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import com.example.sharedpreferences.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {

    lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {

        super.onCreate(savedInstanceState)

        binding = ActivityMainBinding.inflate(layoutInflater)

        setContentView(binding.root)
        val sharedPreferences = this.getSharedPreferences("valores", Context.MODE_PRIVATE)
        val valor = sharedPreferences.getString("valor", "")

        binding.textResultado.setText(valor)


        binding.buttonGravar.setOnClickListener {

            val novoValor = binding.editValor.text.toString()

            binding.textResultado.setText(novoValor)

            val editor = sharedPreferences.edit()
            editor.putString("valor", novoValor)
            editor.apply()

        }

    }
}