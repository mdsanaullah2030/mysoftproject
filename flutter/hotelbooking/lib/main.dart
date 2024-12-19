import 'package:flutter/material.dart';
import 'package:hotelbooking/location/registration_view.dart';
import 'package:hotelbooking/page/home.dart';






void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,


      home:HomePage(

      ),
    );
  }
}
