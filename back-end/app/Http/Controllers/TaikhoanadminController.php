<?php

namespace App\Http\Controllers;

use App\Models\Taikhoanadmin;
use Illuminate\Http\Request;

class TaikhoanadminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $taikhoanadmin = Taikhoanadmin::all();
        return response()->json($taikhoanadmin);
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
        $request->validate([
            'email' => 'required',
            'matkhau' => 'required',
        ]);

        if (Taikhoanadmin::where($request->all())->count() > 0) {
            return response()->json([
                'Status' => true,
                'Message' => 'Khach hang da ton tai!',
            ], 200);
        } else {
            $taikhoanadmin = Taikhoanadmin::create($request->all());

            return response()->json([
                'message' => 'Khach hang tao thanh cong',
                'Khach hang' => $taikhoanadmin
            ], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Taikhoanadmin  $taikhoanadmin
     * @return \Illuminate\Http\Response
     */
    public function show(Taikhoanadmin $taikhoanadmin)
    {
        return response()->json($taikhoanadmin);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Taikhoanadmin  $taikhoanadmin
     * @return \Illuminate\Http\Response
     */
    public function edit(Taikhoanadmin $taikhoanadmin)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Taikhoanadmin  $taikhoanadmin
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Taikhoanadmin $taikhoanadmin)
    {
        if (Taikhoanadmin::where($request->all())->count() < 0) {
            return response()->json([
                'Status' => true,
                'Message' => 'Khach hang khong ton tai!',
            ], 200);
        } else {
            $taikhoanadmin->update($request->all());
            return response()->json($taikhoanadmin);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Taikhoanadmin  $taikhoanadmin
     * @return \Illuminate\Http\Response
     */
    public function destroy(Taikhoanadmin $taikhoanadmin)
    {
        if (!$taikhoanadmin) {
            return response()->json([
                'Status' => true,
                'Message' => "Khach hang khong ton tai!",
            ], 200);
        } else {
            $taikhoanadmin->delete();
            return response()->json([
                'Status' => true,
                'Message' => "Xoa khach hang thanh cong!",
            ], 200);
        }
    }
}
