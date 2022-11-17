<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\HangDienThoai;
use Illuminate\Http\Request;

class HangDienThoaiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $HangDienThoai = HangDienThoai::all();
        return response()->json([
            'HangDienThoai' => $HangDienThoai,
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
        $HangDienThoai = HangDienThoai::create($request->all());

        return response()->json([
            'message' => 'HangDienThoai save successfully!',
            'HangDienThoai' => $HangDienThoai,
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
    public function edit(HangDienThoai $HangDienThoai)
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
    public function update(Request $request, HangDienThoai $HangDienThoai)
    {
        $HangDienThoai->update($request->all());

        return response()->json([
            'message' => "Product updated successfully!",
            'HangDienThoai' => $HangDienThoai,
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\HangDienThoai  $hangDienThoai
     * @return \Illuminate\Http\Response
     */
    public function destroy(HangDienThoai $HangDienThoai)
    {
        $HangDienThoai->delete();

        return response()->json([
            'message' => "HangDienThoai deleted successfully!",
        ], 200);
    }
}
