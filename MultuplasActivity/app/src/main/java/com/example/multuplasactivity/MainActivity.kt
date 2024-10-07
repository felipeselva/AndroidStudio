package com.example.multuplasactivity

import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.example.multuplasactivity.databinding.ActivityMainBinding
import com.example.multuplasactivity.ui.theme.ProfileActivity

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)

        setContentView(binding.root)

        binding.buttonIr.setOnClickListener{
            /*val i = Intent(this, ProfileActivity::class.java)
            startActivity(i)*/

            startActivity(Intent(this, ProfileActivity::class.java))
        }

    }
}