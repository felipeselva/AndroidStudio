package com.example.menurestaurante

import android.content.Intent
import android.os.Bundle
import android.view.View
import androidx.appcompat.app.AppCompatActivity
import com.example.menurestaurante.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding
    private val preco_pao = 0.70;
    private val preco_cafe = 1.0;
    private val preco_chocolate = 1.2;


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)

        setContentView(binding.root)

        binding.buttonPedido.setOnClickListener{
            val i = Intent(this, SplashScreenActivity::class.java)
            i.putExtra("quant_cafe", binding.edtQuantidadeCafe.text.toString())
            i.putExtra("quant_pao", binding.edtQuantidadePao.text.toString())
            i.putExtra("quant_chocolate", binding.edtQuantidadeChocolate.text.toString())
            i.putExtra("preco_cafe", preco_cafe)
            i.putExtra("preco_pao", preco_pao)
            i.putExtra("preco_chocolate", preco_chocolate)
            startActivity(i);



        }
        binding.checkCafe.setOnClickListener{
            if(binding.checkCafe.isChecked()){
                binding.edtQuantidadeCafe.setText("1");
                binding.textPrecoCafe.visibility = View.VISIBLE;
            } else{
                binding.edtQuantidadeCafe.setText("0");
                binding.textPrecoCafe.visibility = View.GONE;
            }

        }
        binding.checkPao.setOnClickListener{
            if(binding.checkPao.isChecked()){
                binding.edtQuantidadePao.setText("1");
                binding.textPrecoPao.visibility = View.VISIBLE;
            } else{
                binding.edtQuantidadePao.setText("0");
                binding.textPrecoPao.visibility = View.GONE;
            }
        }
        binding.checkChocolate.setOnClickListener{
            if(binding.checkChocolate.isChecked()){
                binding.edtQuantidadeChocolate.setText("1");
                binding.textPrecoChocolate.visibility = View.VISIBLE;
            } else{
                binding.edtQuantidadeChocolate.setText("0");
                binding.textPrecoChocolate.visibility = View.GONE;
            }

        }

    }
}