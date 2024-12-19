import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:hotelbooking/model/registrationModel.dart';

class LocationService {
  final String apiUrl = 'http://localhost:8080/api/registrations';

  Future<List<Registration>> fetchLocation() async {
    final response = await http.get(Uri.parse(apiUrl));
    if (response.statusCode == 200) {
      final List<dynamic> locationJson = json.decode(response.body);
      return locationJson.map((json) => Registration.fromJson(json)).toList();
    } else {
      throw Exception('Failed to load registrations');
    }
  }

  Future<void> updateLocation(Registration location) async {
    if (location.id == null) {
      throw Exception('Location ID is required for update');
    }

    final response = await http.put(
      Uri.parse('$apiUrl/${location.id}'),
      headers: {"Content-Type": "application/json"},
      body: jsonEncode(location.toJson()),
    );

    if (response.statusCode != 200) {
      throw Exception('Failed to update location');
    }
  }
}
