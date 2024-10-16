package com.example.intentcomextras

import android.content.Intent
import android.os.Bundle
import android.widget.Toast
import androidx.activity.result.ActivityResultLauncher
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AppCompatActivity
import com.example.intentcomextras.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding
    private lateinit var  result: ActivityResultLauncher<Intent>
    private var nome ="";

    override fun onCreate(savedInstanceState: Bundle?) {

        super.onCreate(savedInstanceState)

    binding = ActivityMainBinding.inflate(layoutInflater)

        setContentView(binding.root)

        binding.buttonMudarNome.setOnClickListener{


            val i = Intent(this, MainActivity2::class.java)

            i.putExtra("nome", nome)

            //startActivity(i);
            result.launch(i);
        }

        result = registerForActivityResult(ActivityResultContracts.StartActivityForResult()) {
            if(it.data != null && it.resultCode == 1) {
                nome = it.data?.getStringExtra("nome").toString()
                binding.editNome.text = "Olá ${nome}"


            } else {
                Toast.makeText(applicationContext,"Erro ao atualizar o nome", Toast.LENGTH_SHORT).show()
            }
        }

    }
}