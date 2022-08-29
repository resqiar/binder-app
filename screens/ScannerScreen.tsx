import ExtensionCard from "../components/card/ExtensionCard";
import DeniedCamera from "../components/miscs/DeniedCamera";
import RequestingCamera from "../components/miscs/RequestingCamera";
import ExtCardSkeleton from "../components/skeleton/ExtCardSkeleton";
import { BarCodeEvent, BarCodeScanner } from "expo-barcode-scanner";
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { IData } from "../constants/data";
import { fetchSpecificData } from "../libs/fetchData";
import { isNumeric } from "../libs/isNumeric";
import { Ionicons } from "@expo/vector-icons";
import { NavigationType } from "../types/navigation";

export default function ScannerScreen(props: NavigationType<"ScannerScreen">) {
  // state to keep the camera permission
  const [permission, setPermission] = useState<boolean | null>(null);

  async function checkPermission() {
    // get the permission from the device's settings
    const data = await BarCodeScanner.requestPermissionsAsync();
    // set to true or false based on "granted" status
    setPermission(data.status === "granted");
  }

  useEffect(() => {
    // check permission everytime component mounted
    checkPermission();
  }, []);

  // State to store backend request data
  const [data, setData] = useState<IData | undefined>();
  const [result, setResult] = useState<string>();

  // state for loading when fetching from server
  const [loading, setLoading] = useState<boolean>(false);

  async function handleSpecificFetch() {
    // if there is no result or the result
    // is not a numerical, return nothing.
    if (!result || !isNumeric(result)) return;

    setLoading(true);

    // fetchSpecificData from the server
    await fetchSpecificData({
      id: parseInt(result),
      setData: setData,
    });

    setLoading(false);
  }

  useEffect(() => {
    handleSpecificFetch();
  }, [result]);

  // if the permission is not yet granted,
  // show the placeholder component.
  // This component is only used for placeholder when
  // permission dialog showed to the user.
  if (permission === null) {
    return <RequestingCamera />;
  }

  // if the user is either rejected or denied entirely,
  // show the DeniedCamera component to show user the permission
  // has been rejected/denied.
  if (permission === false) {
    return <DeniedCamera />;
  }

  function handleBarcodeScanner(scan: BarCodeEvent) {
    // set the result from barcode scanner
    if (scan.data) {
      setResult(scan.data);
    }
  }

  return (
    <View className="flex-1">
      <StatusBar
        barStyle="dark-content"
        animated={true}
        translucent={true}
        backgroundColor="transparent"
      />

      {/* BARCODE SCANNER */}
      <View className="h-[500px] w-full items-center overflow-hidden">
        <BarCodeScanner
          onBarCodeScanned={data ? undefined : handleBarcodeScanner}
          style={{ height: 1000, width: 1000, borderRadius: 30 }}
        />
      </View>

      <View className="rounded-3xl flex-1 -mt-16 bg-white">
        {/* BARCODE SCANNER HELPER TEXT */}
        <View className="py-2 items-center">
          <Text className="text-slate-400">Scan the QR code</Text>
        </View>

        {/* SKELETON */}
        {loading ? <ExtCardSkeleton count={1} compact={true} /> : undefined}

        {/* FOUND DATA TITLE AND RESET BUTTON */}
        {data && !loading ? (
          <View className="flex flex-row justify-between px-6 my-4">
            <Text>
              Found with id <Text>{data.id}</Text>
            </Text>

            <View className="flex items-center flex-row gap-2">
              <Text>Reset</Text>
              <TouchableOpacity
                onPress={() => {
                  setData(undefined);
                  setResult(undefined);
                }}
              >
                <Ionicons
                  style={{ marginTop: 2 }}
                  name="md-reload-sharp"
                  size={15}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </View>
        ) : undefined}

        {/* FOUND DATA CARD */}
        {data && !loading ? (
          <View className="py-1 px-2">
            <ExtensionCard value={data} rn={props} compact={true} />
          </View>
        ) : undefined}
      </View>
    </View>
  );
}
