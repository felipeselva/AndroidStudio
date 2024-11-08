package com.example.listas

import android.R
import android.os.Bundle
import android.widget.ArrayAdapter
import android.widget.Toast
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import com.example.listas.databinding.ActivityMain1Binding
import com.example.listas.ui.theme.ListasTheme

class MainActivity : ComponentActivity() {

    lateinit var binding: ActivityMain1Binding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMain1Binding.inflate(layoutInflater)
        setContentView(binding.root)

        val ListaNumeros = ArrayList<Int>()

        ListaNumeros.add(1)
        ListaNumeros.add(10)
        ListaNumeros.add(5)
        ListaNumeros.add(4)
        ListaNumeros.add(8)

        val adapter = ArrayAdapter(this, R.layout.simple_list_item_1, ListaNumeros)
        binding.listView.adapter = adapter

        binding.listView.setOnItemClickListener{ parent,view,position, id ->
            Toast.makeText(this, "Clicado em ${ListaNumeros.get(position)}", Toast.LENGTH_SHORT).show()
        }
    }
}