<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\HangDienThoai;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class HangDienThoaiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $hangDienThoai = HangDienThoai::all();
        return response()->json([
            'Hang Dien Thoai' => $hangDienThoai
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $hangDienThoai = HangDienThoai::create($request->all());

        return response()->json([
            'message' => "Hang Dien Thoai saved successfully!",
            'Hang Dien Thoai' => $hangDienThoai
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\HangDienThoai  $hangDienThoai
     * @return \Illuminate\Http\Response
     */
    public function show(HangDienThoai $hangDienThoai)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\HangDienThoai  $hangDienThoai
     * @return \Illuminate\Http\Response
     */
    public function edit(HangDienThoai $hangDienThoai)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\HangDienThoai  $hangDienThoai
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, HangDienThoai $hangDienThoai)
    {
        $hangDienThoai->update($request->all());

        return response()->json([
            'message' => "HangDienThoai updated successfully!",
            'HangDienThoai' => $hangDienThoai
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\HangDienThoai  $hangDienThoai
     * @return \Illuminate\Http\Response
     */
    public function destroy(HangDienThoai $hangDienThoai)
    {
        $hangDienThoai->delete();

        return response()->json([
            'message' => "Hang Dien Thoai deleted successfully!",
        ], 200);
    }
}
