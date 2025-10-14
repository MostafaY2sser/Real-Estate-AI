<?php

namespace App\Http\Controllers;

use App\Models\TeamMember;
use Illuminate\Http\Request;

class TeamMemberController extends Controller
{
    public function index() {
        return response()->json(TeamMember::all());
    }

    public function store(Request $request) {
        $data = $request->validate([
            'name' => 'required|string',
            'position' => 'required|string',
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
            'social_links' => 'nullable|array',
        ]);

        if ($request->hasFile('image')) {
            $imageName = time() . '_' . $request->image->getClientOriginalName();
            $request->image->move(public_path('uploads/team'), $imageName);
            $data['image'] = 'uploads/team/' . $imageName;
        }

        $teamMember = TeamMember::create($data);
        return response()->json($teamMember, 201);
    }

    public function show($id) {
        return response()->json(TeamMember::findOrFail($id));
    }

    public function update(Request $request, $id) {
        $teamMember = TeamMember::findOrFail($id);
        $data = $request->all();

        if ($request->hasFile('image')) {
            $imageName = time() . '_' . $request->image->getClientOriginalName();
            $request->image->move(public_path('uploads/team'), $imageName);
            $data['image'] = 'uploads/team/' . $imageName;
        }

        $teamMember->update($data);
        return response()->json($teamMember);
    }

    public function destroy($id) {
        $teamMember = TeamMember::findOrFail($id);
        $teamMember->delete();
        return response()->json(['message' => 'Team member deleted successfully']);
    }
}
