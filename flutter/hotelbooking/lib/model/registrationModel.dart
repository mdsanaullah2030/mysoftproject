class Registration {
  int? id;
  String? name;
  String? presentAddress;
  String? permanentAddress;
  String? gender;
  DateTime? age; // Renamed for clarity
  String? cellNo;

  Registration({
    this.id,
    this.name,
    this.presentAddress,
    this.permanentAddress,
    this.gender,
    this.age,
    this.cellNo,
  });

  factory Registration.fromJson(Map<String, dynamic> json) {
    return Registration(
      id: json['id'],
      name: json['name'],
      presentAddress: json['presentAddress'],
      permanentAddress: json['permanentAddress'],
      gender: json['gender'],
      age: json['age'] != null ? DateTime.parse(json['age']) : null,
      cellNo: json['cellNo'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'name': name,
      'presentAddress': presentAddress,
      'permanentAddress': permanentAddress,
      'gender': gender,
      'age': age?.toIso8601String(),
      'cellNo': cellNo,
    };
  }

  // Method to calculate age
  int? calculateAge() {
    if (age == null) return null;
    final today = DateTime.now();
    int calculatedAge = today.year - age!.year;
    if (today.month < age!.month ||
        (today.month == age!.month && today.day < age!.day)) {
      calculatedAge--;
    }
    return calculatedAge;
  }
}
