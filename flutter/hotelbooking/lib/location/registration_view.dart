import 'package:flutter/material.dart';
import 'package:hotelbooking/model/registrationModel.dart';
import 'package:hotelbooking/service/Registration_service.dart';

class RegistrationListScreen extends StatefulWidget {
  @override
  _RegistrationListScreenState createState() => _RegistrationListScreenState();
}

class _RegistrationListScreenState extends State<RegistrationListScreen> {
  late Future<List<Registration>> futureRegistrations;

  @override
  void initState() {
    super.initState();
    futureRegistrations = LocationService().fetchLocation();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: PreferredSize(
        preferredSize: Size.fromHeight(kToolbarHeight),
        child: Container(
          decoration: BoxDecoration(
            gradient: LinearGradient(
              colors: [Colors.teal, Colors.blue, Colors.greenAccent],
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
            ),
          ),
          child: AppBar(
            title: Text('Registration List'),
            backgroundColor: Colors.transparent,
            elevation: 0,
          ),
        ),
      ),
      body: Container(
        decoration: BoxDecoration(
          gradient: LinearGradient(
            colors: [
              Colors.lightGreen[50]!, // First color
              Colors.blue[50]!,
              Colors.indigo[50]!,
              Colors.red[50]!, // Second color
            ],
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
          ),
        ),
        child: FutureBuilder<List<Registration>>(
          future: futureRegistrations,
          builder: (context, snapshot) {
            if (snapshot.connectionState == ConnectionState.waiting) {
              return Center(child: CircularProgressIndicator());
            } else if (snapshot.hasError) {
              return Center(child: Text('Error: ${snapshot.error}'));
            } else if (!snapshot.hasData || snapshot.data!.isEmpty) {
              return Center(child: Text('No registrations found.'));
            }

            final registrations = snapshot.data!;
            return ListView.builder(
              itemCount: registrations.length,
              itemBuilder: (context, index) {
                final registration = registrations[index];
                return Card(
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(15), // Rounded corners
                  ),
                  elevation: 4, // Adds shadow for a lifted look
                  margin: EdgeInsets.symmetric(vertical: 8, horizontal: 16),
                  child: Padding(
                    padding: EdgeInsets.all(16), // Add padding for better spacing
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        CircleAvatar(
                          radius: 25,
                          backgroundColor: Colors.teal[100],
                          child: Icon(
                            Icons.person,
                            color: Colors.teal[900],
                          ),
                        ),
                        SizedBox(width: 16), // Space between avatar and text
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                registration.name ?? 'No Name',
                                style: TextStyle(
                                  fontWeight: FontWeight.bold,
                                  fontSize: 16,
                                ),
                              ),
                              SizedBox(height: 8), // Spacing between title and content
                              Text(
                                'Present Address: ${registration.presentAddress ?? 'N/A'}',
                                style: TextStyle(fontSize: 14),
                              ),
                              Text(
                                'Permanent Address: ${registration.permanentAddress ?? 'N/A'}',
                                style: TextStyle(fontSize: 14),
                              ),
                              Text(
                                'Gender: ${registration.gender ?? 'N/A'}',
                                style: TextStyle(fontSize: 14),
                              ),
                              Text(
                                'Age: ${registration.calculateAge() ?? 'N/A'}',
                                style: TextStyle(fontSize: 14),
                              ),
                              Text(
                                'Cell No: ${registration.cellNo ?? 'N/A'}',
                                style: TextStyle(fontSize: 14),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                );

              },
            );
          },
        ),
      ),
    );
  }
}
